import {
  AnnotationFactory
} from "@tspring/annotation-utils"

export const Component = AnnotationFactory.createTypeAnnotation<[qualifier: string | void]>()
export const Controller = AnnotationFactory.createTypeAnnotation<[qualifier: string | void]>()
export const Repository = AnnotationFactory.createTypeAnnotation<[qualifier: string | void]>()
export const Service = AnnotationFactory.createTypeAnnotation<[qualifier: string | void]>()
