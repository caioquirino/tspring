import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Component = AnnotationFactory.OptionalValueClassAnnotation<string>
export const Component: Component = AnnotationFactory.createValueClassAnnotation<string>()

export type Controller = AnnotationFactory.OptionalValueClassAnnotation<string>
export const Controller: Controller = AnnotationFactory.createValueClassAnnotation<string>()

export type Repository = AnnotationFactory.OptionalValueClassAnnotation<string>
export const Repository: Repository = AnnotationFactory.createValueClassAnnotation<string>()

export type Service = AnnotationFactory.OptionalValueClassAnnotation<string>
export const Service: Service = AnnotationFactory.createValueClassAnnotation<string>()
