import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Autowired = AnnotationFactory.NoArgsTypeAnnotation
export const Autowired: Autowired = AnnotationFactory.createNoArgsTypeAnnotation()

export type Qualifier = AnnotationFactory.OptionalValueFieldAnnotation<string>
export const Qualifier: Qualifier = AnnotationFactory.createValueFieldAnnotation<string>()
