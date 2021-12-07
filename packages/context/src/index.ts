import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Autowired = AnnotationFactory.TypeAnnotation<void>
export const Autowired: Autowired = AnnotationFactory.createTypeAnnotation<void>()

export type Qualifier = AnnotationFactory.FieldAnnotation<string>
export const Qualifier: Qualifier = AnnotationFactory.createFieldAnnotation<string>()
