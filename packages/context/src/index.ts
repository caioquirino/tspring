import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Autowired = AnnotationFactory.NoArgsClassAnnotation
export const Autowired: Autowired = AnnotationFactory.createNoArgsClassAnnotation()

export type Qualifier = AnnotationFactory.OptionalValuePropertyAnnotation<string>
export const Qualifier: Qualifier = AnnotationFactory.createValuePropertyAnnotation<string>()
