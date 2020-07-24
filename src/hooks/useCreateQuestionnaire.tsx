import { useState, useCallback } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_QUESTIONNAIRE } from '../graphql/createQuestionnaire.query';


interface Questionnaire {
  questionnaireTitle: string
  description: string
  imageUrl: string
  questions: Question[]
}

interface Question {
  questionTitle: string
  answers: any
  enableEdition: boolean
}
interface Answer {
  description: string
  isCorrect: boolean
}

function useCreateQuestionnaire(){
  const [questionnaireState, setQuestionnaireState] = useState<Questionnaire>({
    questionnaireTitle: "Cuestionario sin título",
    description: "",
    imageUrl: "",
    questions: [
        { 
          questionTitle: "Pregunta sin título",
          enableEdition: true,
          answers: [
            { description: "Opción 1", isCorrect: false }
          ]
        }
    ]
  });

  const [ createQuestionnaireMutation, { data, error, loading } ] = useMutation(CREATE_QUESTIONNAIRE);

  const changeMainInfo = useCallback((name, value) => {
    setQuestionnaireState(prevState => ({ ...prevState , [name]: value }))
  }, []);

  const addQuestion = useCallback(() => {
      setQuestionnaireState( prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions,
          { 
            questionTitle: "Pregunta",
            enableEdition: false,
            answers: [
              { description: "Opción 1", isCorrect: false }
            ]
          }
        ]
      }))
  }, []);

  const removeQuestion = useCallback((questionId) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.filter((question,idx) => idx !== questionId)
        ]
      })
    )
  }, [])

  const addOption = useCallback((questionId) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((item, index) => index === questionId ? {...item, answers: [...item.answers, { description: `Opción ${item.answers.length + 1}`, isCorrect: false }]}: item)
        ]
      })
    )
}, []);

  const changeQuestion = useCallback((name, value, id) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((item, index) => index === id ? {...item, [name]: value} : item)
        ]
      })
    )
  }, []);

  const changeOption = useCallback((name, value, questionId, optionId) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((item, index) => index === questionId ? {...item, answers: [ ...item.answers.map((option, idx) => idx === optionId ? {...option, [name]: value}: option) ]}: item)
        ]
      })
    )
  }, []);

  const enableEditionInQuestion = useCallback((questionId) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((item, index) => index === questionId ? {...item, enableEdition: true}: {...item, enableEdition: false})
        ]
      })
    )
  }, []);

  const removeQuestionOption = useCallback((optionId, questionId) => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((question, index) => index === questionId ? {...question, answers: [ ...question.answers.filter((answer, idx)=> idx !== optionId)]} : question)
        ]
      })
    )
    // debugger;
  }, []);

  const createQuestionnaire = useCallback(() => {
    console.log("Creando cuestionario", questionnaireState)
    questionnaireState.questions.map(question => delete question['enableEdition'])
    console.log(questionnaireState)
    createQuestionnaireMutation({
      variables: { questionnaire: questionnaireState },
    })

    return { data, loading, error }
  }, []);

  return {
    questionnaireState,
    addQuestion,
    removeQuestion,
    addOption,
    changeMainInfo,
    changeQuestion,
    changeOption,
    enableEditionInQuestion,
    removeQuestionOption,
    createQuestionnaire
  }
}

export default useCreateQuestionnaire