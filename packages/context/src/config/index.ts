import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Configuration = AnnotationFactory.TypeAnnotation<void>
export const Configuration: Configuration = AnnotationFactory.createTypeAnnotation<void>()

export type Bean = AnnotationFactory.MethodAnnotation<string | void>
export const Bean: Bean = AnnotationFactory.createMethodAnnotation<string | void>()
