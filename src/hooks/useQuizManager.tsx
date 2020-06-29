import  {useState, useCallback, useEffect} from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUESTIONNAIRE } from "../graphql/questionnaire.query";

interface Answer {
  id: string
  description: string
  isCorrect: boolean
}
interface Question {
  questionTitle: string
  answers: Answer[]
}


function useQuizManager({id}){

  const [quizState, setQuizState] = useState<any>({});

  const [questionnaireQuery, { loading, error }] = useLazyQuery(QUESTIONNAIRE, {
    onCompleted: (data) =>setQuizState({
      ...data?.questionnaire,
      counter: 0,
      total: data?.questionnaire.questions.length
    })
  });

  useEffect(()=> {
    questionnaireQuery({
      variables: {id} 
    })
  }, [])


  const setNextQuestion = useCallback(() => {
    setQuizState(prevState => ({...prevState, counter: prevState.counter + 1 })
    )
  }, [])

  return {
    quizState,
    setNextQuestion,
    loading,
    error
  }

}

export default useQuizManager