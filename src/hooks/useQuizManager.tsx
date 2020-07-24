import  {useState, useCallback, useEffect} from "react";
import { useLazyQuery } from "@apollo/client";
import { QUESTIONNAIRE } from "../graphql/questionnaire.query";

interface Answer {
  id: string;
  description: string;
  isCorrect: boolean;
}

interface Question {
  questionTitle: string
  answers: Answer[]
}


interface UseQuizManagerProps {
  id: string;
}

function useQuizManager({ id }: UseQuizManagerProps) {
  const [quizState, setQuizState] = useState<any>({});

  const [questionnaireQuery, { loading, error }] = useLazyQuery(QUESTIONNAIRE, {
    onCompleted: (data) =>
      setQuizState({
        ...data?.questionnaire,
        counter: 0,
        total: data?.questionnaire.questions.length,
        userAnswers: [],
      }),
  });

  useEffect(() => {
    questionnaireQuery({
      variables: { id },
    });
  }, []);

  const setNextQuestion = useCallback(() => {
    setQuizState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  }, []);

  const setUserAnswers = useCallback((currentAnswer) => {
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: [...prevState.userAnswers, { correct: currentAnswer }],
    }));
  }, []);

  return {
    quizState,
    setNextQuestion,
    setUserAnswers,
    loading,
    error,
  };
}

export default useQuizManager;
