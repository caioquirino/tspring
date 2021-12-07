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
Custom type annotations                 -  @Annotation(f1=1, f2=false) - Yes         - Using TS Tuples
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
export type TypeAnnotation<T extends [...any]> = (...values: [...T]) => TypeAnnotationBase

export const createTypeAnnotation = <T extends [...any]>(): TypeAnnotation<T> => {
  const valueAnnotation = (..._factoryArgs) => (...decoratorArgs): void => {
  }
  return valueAnnotation as TypeAnnotation<T>
}

// Method annotations
// Made to annotate the method signature

type MethodAnnotationBase = (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => void
export type MethodAnnotation<T extends [...any]> = (...values: [...T]) => MethodAnnotationBase

export const createMethodAnnotation = <T extends [...any]>(): MethodAnnotation<T> => {
  const valueAnnotation = (..._v) => (_target: Object, _key: string | symbol, _descriptor: PropertyDescriptor) => {
  }
  return valueAnnotation as MethodAnnotation<T>
}

// Type Field annotations
// Made for usage in properties inside a class
type FieldAnnotationBase = (target: Object, key: string | symbol) => void
export type FieldAnnotation<T extends [...any]> = (...values: [...T]) => FieldAnnotationBase

export const createFieldAnnotation = <T extends [...any]>(): FieldAnnotation<T> => {
  const valueAnnotation = (..._v) => (_arget: Object, _key: string | symbol) => {
  }
  return valueAnnotation as FieldAnnotation<T>
}

// Method Parameter Annotations
// Made for usage in parameters of a method
type ParameterAnnotationBase = (target: Object, key: string | symbol, parameterIndex: number) => void

export type ParameterAnnotation<T extends [...any]> = (...values: [...T]) => ParameterAnnotationBase

export const createParameterAnnotation = <T extends [...any]>(): ParameterAnnotation<T> => {
  const valueAnnotation = (..._v) => (_target: Object, _key: string | symbol, _parameterIndex: number) => {
  }
  return valueAnnotation as ParameterAnnotation<T>
}
