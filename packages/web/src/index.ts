import {
  AnnotationFactory
} from "@tspring/annotation-utils"
export type RestController = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const RestController: RestController = AnnotationFactory.createValueTypeAnnotation<string>()

export type RequestMapping = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const RequestMapping: RequestMapping = AnnotationFactory.createValueMethodAnnotation<string>()

export type RequestParam = AnnotationFactory.OptionalValueParameterAnnotation<string>
export const RequestParam: RequestParam = AnnotationFactory.createValueParameterAnnotation<string>()

export type PathParam = AnnotationFactory.OptionalValueParameterAnnotation<string>
export const PathParam: PathParam = AnnotationFactory.createValueParameterAnnotation<string>()
