import { useState, useCallback } from "react";

interface Questionnaire {
  questionnaireTitle: string,
  description: string,
  questions: Question[]
}

interface Question {
  questionTitle: string,
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
    questions: [
        { 
          questionTitle: "Pregunta sin título",
          enableEdition: false,
          answers: [
            { description: "Opción 1", isCorrect: false }
          ]
        }
    ]
  });

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
            enableEdition: true,
            answers: [
              { description: "Opción 1", isCorrect: false }
            ]
          }
        ]
      }))
  }, []);

  const removeQuestion = useCallback(() => {
    setQuestionnaireState(
      prevState => ({
        ...prevState,
        questions: [
          ...prevState.questions.map((question, index) => index === questionId ? {...question, answers: [ ...question.answers.filter((answer, idx)=> idx !== optionId)]} : question)
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
    console.log("CHANGEQUESTION:", name, value, id)
    // const updatedQuestion = {[name]: value};
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
  }, [])

  return {
    questionnaireState,
    addQuestion,
    addOption,
    changeMainInfo,
    changeQuestion,
    changeOption,
    enableEditionInQuestion,
    removeQuestionOption
  }
}

export default useCreateQuestionnaire