
export const resolvers = {
  Query: {
    questionnaires(parent:any, args:any, ctx:any) {
      return ctx.prisma.questionnaire.findMany()
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
    // createQuestionnaire(){
    //   return prisma.questionnaire.create()
    // },
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
    }
  }
}
