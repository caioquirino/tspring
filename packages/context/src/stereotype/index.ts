import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export type Component = AnnotationFactory.TypeAnnotation<string | void>
export const Component: Component = AnnotationFactory.createTypeAnnotation<string | void>()

export type Controller = AnnotationFactory.TypeAnnotation<string | void>
export const Controller: Controller = AnnotationFactory.createTypeAnnotation<string | void>()

export type Repository = AnnotationFactory.TypeAnnotation<string | void>
export const Repository: Repository = AnnotationFactory.createTypeAnnotation<string | void>()

export type Service = AnnotationFactory.TypeAnnotation<string | void>
export const Service: Service = AnnotationFactory.createTypeAnnotation<string | void>()
