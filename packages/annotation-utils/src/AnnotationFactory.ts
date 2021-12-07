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
Required typed args with value          -  @Annotation("value")        - Yes         - Using target type
Optional typed args with parenthesis    -  @Annotation()               - Yes         - Using target type | void (2)
No-args annotation with parenthesis     -  @Annotation()               - Yes         - Using <void> type
Custom type annotations                 -  @Annotation(f1=1, f2=false) - No          - To be implemented
Optional typed args without parenthesis -  @Annotation                 - No          - Too messy to implement (1)
No-args annotation without parenthesis  -  @Annotation                 - No          - Too messy to implement (1)

Notes:
(1): In order to make the factory function both a factory and de decorator itself (hybrid), it was necessary to
change the runtime implementation to decide based in the numbers/type of the parameters if it's
being used as a factory or a decorator
(2): Optional value annotation can be achieved by using Annotation<string | void>
 */


// Type annotations

type TypeAnnotationBase = <T extends { new(...args: any[]): {} }>(ctr: T) => void

type TypeAnnotationFactoryType<T> = (value: T) => TypeAnnotationBase
export type TypeAnnotation<T> = TypeAnnotationFactoryType<T>

export const createTypeAnnotation = <T>(): TypeAnnotation<T> => {
  const valueAnnotation = (value: T) => <T extends { new(...args: any[]): {} }>(ctr: T): void => {
  }
  return valueAnnotation as TypeAnnotation<T>
}


// Method annotations
// Made to annotate the method signature

type MethodAnnotationBase = (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => void

type MethodAnnotationFactoryType<T> = (value: T) => MethodAnnotationBase
export type MethodAnnotation<T> = MethodAnnotationFactoryType<T>

export const createMethodAnnotation = <T>(): MethodAnnotation<T> => {
  const valueAnnotation = (value: T) => (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
  }
  return valueAnnotation as TypeAnnotation<T>
}


// Type Field annotations
// Made for usage in properties inside a class
type FieldAnnotationBase = (target: Object, key: string | symbol) => void

type FieldAnnotationFactoryType<T> = (value: T) => FieldAnnotationBase
export type FieldAnnotation<T> = FieldAnnotationFactoryType<T>

export const createFieldAnnotation = <T>(): FieldAnnotation<T> => {
  const valueAnnotation = (value: T) => (target: Object, key: string | symbol) => {
  }
  return valueAnnotation as TypeAnnotation<T>
}



// Method Parameter Annotations
// Made for usage in parameters of a method
type ParameterAnnotationBase = (target: Object, key: string | symbol, parameterIndex: number) => void

type ParameterAnnotationFactoryType<T> = (value: T) => ParameterAnnotationBase
export type ParameterAnnotation<T> = ParameterAnnotationFactoryType<T>

export const createParameterAnnotation = <T>(): ParameterAnnotation<T> => {
  const valueAnnotation = (value: T) => (target: Object, key: string | symbol, parameterIndex: number) => {
  }
  return valueAnnotation as ParameterAnnotation<T>
}
