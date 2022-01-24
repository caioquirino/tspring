import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export const Configuration = AnnotationFactory.createTypeAnnotation<[]>()
export const Bean = AnnotationFactory.createMethodAnnotation<[name: string | void]>()
