import {
  AnnotationFactory
} from "@tspring/annotation-utils"
export type RestController = AnnotationFactory.OptionalValueClassAnnotation<string>
export const RestController: RestController = AnnotationFactory.createValueClassAnnotation<string>()

export type RequestMapping = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const RequestMapping: RequestMapping = AnnotationFactory.createValueMethodAnnotation<string>()

export type RequestParam = AnnotationFactory.OptionalValueMethodParameterAnnotation<string>
export const RequestParam: RequestParam = AnnotationFactory.createValueMethodParameterAnnotation<string>()

export type PathParam = AnnotationFactory.OptionalValueMethodParameterAnnotation<string>
export const PathParam: PathParam = AnnotationFactory.createValueMethodParameterAnnotation<string>()
