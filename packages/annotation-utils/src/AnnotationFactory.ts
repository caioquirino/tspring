/*
Annotation types:

Capability                                                             - Implemented - Obs.
-------------------------------------------------------------------------------------------------------------------
ElementType.ANNOTATION_TYPE can be applied to an annotation type.      - No          - Too complex to implement now
ElementType.CONSTRUCTOR can be applied to a constructor.               - No          - Unsupported in TS...
ElementType.FIELD can be applied to a field or property.               - Yes         -
ElementType.LOCAL_VARIABLE can be applied to a local variable.         - No          - Not applicable for TS
ElementType.METHOD can be applied to a method-level annotation.        - Yes         -
ElementType.PACKAGE can be applied to a package declaration.           - No          - Not applicable for TS
ElementType.PARAMETER can be applied to the parameters of a method.    - Yes         -
ElementType.TYPE can be applied to any element of a class.             - Yes         -

Capabilities:

Capability                              - Example                      - Implemented - Obs.
-------------------------------------------------------------------------------------------------------------------
Optional typed args without parenthesis -  @Annotation                 - No          - Too messy to implement (1)
Optional typed args with parenthesis    -  @Annotation()               - Yes         -
Optional typed args with value          -  @Annotation("value")        - Yes         -
No-args annotation without parenthesis  -  @Annotation                 - No          - Too messy to implement (1)
No-args annotation with parenthesis     -  @Annotation()               - No          -
Custom type annotations                 -  @Annotation(f1=1, f2=false) - No          - To be implemented

Notes:
(1): In order to make the factory function both a factory and de decorator itself (hybrid), it was necessary to
change the runtime implementation to decide based in the numbers/type of the parameters if it's
being used as a factory or a decorator
 */


// Type annotations

type TypeAnnotationBase = <T extends { new(...args: any[]): {} }>(ctr: T) => void

type NoArgsTypeAnnotationFactoryType = () => TypeAnnotationBase
export type NoArgsTypeAnnotation = NoArgsTypeAnnotationFactoryType

type OptionalValueTypeAnnotationFactoryType<T> = (value?: T) => TypeAnnotationBase
export type OptionalValueTypeAnnotation<T> = OptionalValueTypeAnnotationFactoryType<T>

export const createValueTypeAnnotation = <T>(): OptionalValueTypeAnnotation<T> => {
  const valueAnnotation = (value?: T) => <T extends { new(...args: any[]): {} }>(ctr: T): void => {
  }
  return valueAnnotation as OptionalValueTypeAnnotation<T>
}

export const createNoArgsTypeAnnotation = (): NoArgsTypeAnnotation => {
  const valueAnnotation = () => <T extends { new(...args: any[]): {} }>(ctr: T): void => {
  }
  return valueAnnotation as NoArgsTypeAnnotation
}


// Method annotations
// Made to annotate the method signature

type MethodAnnotationBase = (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => void

type NoArgsMethodAnnotationFactoryType = () => MethodAnnotationBase
export type NoArgsMethodAnnotation = NoArgsMethodAnnotationFactoryType

type OptionalValueMethodAnnotationFactoryType<T> = (value?: T) => MethodAnnotationBase
export type OptionalValueMethodAnnotation<T> = OptionalValueMethodAnnotationFactoryType<T>

export const createValueMethodAnnotation = <T>(): OptionalValueMethodAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
  }
  return valueAnnotation as OptionalValueTypeAnnotation<T>
}

export const createNoArgsMethodAnnotation = (): NoArgsMethodAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
  }
  return valueAnnotation as NoArgsMethodAnnotation
}


// Type Field annotations
// Made for usage in properties inside a class
type FieldAnnotationBase = (target: Object, key: string | symbol) => void

type NoArgsFieldAnnotationFactoryType = () => FieldAnnotationBase
export type NoArgsFieldAnnotation = NoArgsFieldAnnotationFactoryType

type OptionalValueFieldAnnotationFactoryType<T> = (value?: T) => FieldAnnotationBase
export type OptionalValueFieldAnnotation<T> = OptionalValueFieldAnnotationFactoryType<T>

export const createValueFieldAnnotation = <T>(): OptionalValueFieldAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol) => {
  }
  return valueAnnotation as OptionalValueTypeAnnotation<T>
}

export const createNoArgsFieldAnnotation = (): NoArgsFieldAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol) => {
  }
  return valueAnnotation as NoArgsFieldAnnotation
}



// Method Parameter Annotations
// Made for usage in parameters of a method
type ParameterAnnotationBase = (target: Object, key: string | symbol, parameterIndex: number) => void

type NoArgsParameterAnnotationFactoryType = () => ParameterAnnotationBase
export type NoArgsParameterAnnotation = NoArgsParameterAnnotationFactoryType

type OptionalValueParameterAnnotationFactoryType<T> = (value?: T) => ParameterAnnotationBase
export type OptionalValueParameterAnnotation<T> = OptionalValueParameterAnnotationFactoryType<T>

export const createValueParameterAnnotation = <T>(): OptionalValueParameterAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol, parameterIndex: number) => {
  }
  return valueAnnotation as OptionalValueParameterAnnotation<T>
}

export const createNoArgsParameterAnnotation = (): NoArgsParameterAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol, parameterIndex: number) => {
  }
  return valueAnnotation as NoArgsParameterAnnotation
}
