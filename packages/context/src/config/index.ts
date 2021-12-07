import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Configuration = AnnotationFactory.NoArgsTypeAnnotation
export const Configuration: Configuration = AnnotationFactory.createNoArgsTypeAnnotation()

export type Bean = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const Bean: Bean = AnnotationFactory.createValueMethodAnnotation<string>()
