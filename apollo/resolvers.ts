import { Questionnaire } from "../src/types/types";


export const resolvers = {
  Query: {
    questionnaires(parent:any, args:any, ctx:any) {
      console.log(ctx)
      return ctx.prisma.questionnaire.findMany()
    },
    questionnaire(parent:any, {id}: any, ctx:any){
      return ctx.prisma.questionnaire.findOne({where:{id: Number(id)}})
    }
  },
  Questionnaire: {
    questions(parent:any,args:any, ctx:any) {
      return ctx.prisma.question.findMany({where: { questionnaireId: parent.id}})
    }
  },
  Question: {
    answers(parent:any,args:any, ctx:any) {
      return ctx.prisma.answer.findMany({where: {questionId: parent.id}, take: 10})
    }
  },
  Mutation: {
    createQuestionnaire(parent:any, args:any, ctx:any){
      const { questionnaire } = args;
      const  { questionnaireTitle, description, imageUrl, questions } = questionnaire;
      return ctx.prisma.questionnaire.create({
        data: {
          questionnaireTitle,
          description,
          imageUrl,
          questions: {
            create: questions.map((question) =>({
                questionTitle: question.questionTitle,
                answers: {
                  create: question.answers.map((answer) => ({
                      description: answer.description,
                      isCorrect: answer.isCorrect
                  }))
                }
            }))
          }
        }
      })
    },
    createQuestion(parent:any, {questionTitle, questionnaireId}:any, ctx:any ){
      return ctx.prisma.question.create({
        data: {
          questionTitle,
          Questionnaire: {
            connect: { id: Number(questionnaireId) }
          }
        },
        
      })
    },
    createAnswer(parent:any, {description, isCorrect, questionId}:any, ctx:any) {
      return ctx.prisma.answer.create({
        data: {
          description,
          isCorrect,
          Question:{
            connect: {id: Number(questionId)}
          }
        }
      })
    },
  }
}
