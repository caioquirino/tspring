import {
  AnnotationFactory
} from "@tspring/annotation-utils"
export const RestController = AnnotationFactory.createTypeAnnotation<[value: string | void]>()
export const RequestMapping = AnnotationFactory.createMethodAnnotation<[value: string]>()
export const RequestParam = AnnotationFactory.createParameterAnnotation<[value: string | void]>()
export const PathParam = AnnotationFactory.createParameterAnnotation<[value: string | void]>()
