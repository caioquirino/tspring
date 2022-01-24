import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export const Autowired = AnnotationFactory.createTypeAnnotation<[]>()
export const Qualifier = AnnotationFactory.createFieldAnnotation<[ref: string]>()
