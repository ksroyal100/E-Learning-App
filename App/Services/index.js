import {request , gql} from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clujle8ye00lq07w7tn86ehvx/master";

export const getCourseList = async (level) => {
    const query = gql
    `
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          level
          price
          tags
          time
          author
          description {
            markdown
          }
          banner {
            url
          }
          chapters {
            title
            id
            content {
              heading
              description {
                markdown
                html
              }
              output{
                markdown
                html
              }
            }
           
          }
        }
      }
      `
      
    const result = await request(MASTER_URL, query)
    return result
}
export const enrollCourse = async (courseId, userEmail) => {
  
  // ,course: {connect: {id: "`+ courseId +`"}}
  
  const mutationQuery = gql
  `
  mutation Mymutation {
    createUserEnrolledCourse(
      data: {courseId: "`+ courseId + `", userEmail: "` + userEmail + `"
    }
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery)
  return result
}

export const getUserEnrolledCourse = async (courseId,userEmail) => {
  const query = gql 
  `query GetUserEnrollCourse {
    userEnrolledCourses(where: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) 
    {
      id
      courseId
      completedChapter {
        chapterId
      }
    }
  }`
  const result = await request(MASTER_URL, query)
  return result

}

export const MarkChapterCompleted = async ({chapterId, recordId}) => {
  const mutationQuery = gql 
  `mutation markChapterCompleted {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "`+chapterId+`"}}}}
      where: {id: "`+recordId+`"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }`

  const result = await request(MASTER_URL, mutationQuery)
  return result
}

export const createdNewUser = async (userName, email, profileImage) => {
  const mutationQuery = gql
  `mutation CreateNewUser {
    upsertUserDetail(
      upsert: {
        create: {email: "`+ email +`", 
        point: 10, 
        profileImage: "`+profileImage+`", 
        userName: "`+userName+`"}, 
        update: {emall: "`+ email +`",
      profileImage: "`+ profileImage +`", userName: "abc"}}
      where: {email: "`+email+`"}
    ){
      id
    }
    publishUserDetail(where:{email:"`+ email +`"}) {
      id
    }
  }`

  const result = await request(MASTER_URL, mutationQuery)
  return result

}

export const getUserDetail = async (email) => {
  const query = gql
  `query getUserDetails{
    userDetail(where:
      {email: "`+ email +`"}) {
        point
      }
  }`
  const result = await request(MASTER_URL, query)
  return result

} 

export const GetAllUsers = async () => {
  const query = gql
  `query GetAllUsers {
    userDetails(orderBy: point_DESC) {
      id
      profileImage
      userName
      point
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}