import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Configuration = AnnotationFactory.NoArgsClassAnnotation
export const Configuration: Configuration = AnnotationFactory.createNoArgsClassAnnotation()

export type Bean = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const Bean: Bean = AnnotationFactory.createValueMethodAnnotation<string>()
