import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Component = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const Component: Component = AnnotationFactory.createValueTypeAnnotation<string>()

export type Controller = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const Controller: Controller = AnnotationFactory.createValueTypeAnnotation<string>()

export type Repository = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const Repository: Repository = AnnotationFactory.createValueTypeAnnotation<string>()

export type Service = AnnotationFactory.OptionalValueTypeAnnotation<string>
export const Service: Service = AnnotationFactory.createValueTypeAnnotation<string>()
