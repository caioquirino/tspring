import {
  AnnotationFactory
} from "@tspring/annotation-utils"
export type RestController = AnnotationFactory.TypeAnnotation<string | void>
export const RestController: RestController = AnnotationFactory.createTypeAnnotation<string | void>()

export type RequestMapping = AnnotationFactory.MethodAnnotation<string>
export const RequestMapping: RequestMapping = AnnotationFactory.createMethodAnnotation<string>()

export type RequestParam = AnnotationFactory.ParameterAnnotation<string | void>
export const RequestParam: RequestParam = AnnotationFactory.createParameterAnnotation<string | void>()

export type PathParam = AnnotationFactory.ParameterAnnotation<string | void>
export const PathParam: PathParam = AnnotationFactory.createParameterAnnotation<string | void>()
