// Class annotations

type ClassAnnotationBase = (ctr: Function) => void

type NoArgsClassAnnotationType = ClassAnnotationBase
type NoArgsClassAnnotationFactoryType = () => ClassAnnotationBase
export type NoArgsClassAnnotation = NoArgsClassAnnotationFactoryType & NoArgsClassAnnotationType

type OptionalValueClassAnnotationFactoryType<T> = (value?: T) => ClassAnnotationBase
export type OptionalValueClassAnnotation<T> = OptionalValueClassAnnotationFactoryType<T> & NoArgsClassAnnotationType

export const createValueClassAnnotation = <T>(): OptionalValueClassAnnotation<T> => {
  const valueAnnotation = (value?: T) => (ctr: Function) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as OptionalValueClassAnnotation<T>
}

export const createNoArgsClassAnnotation = (): NoArgsClassAnnotation => {
  const valueAnnotation = () => (ctr: Function) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as NoArgsClassAnnotation
}


// Method annotations
// Made to annotate the method signature

type MethodAnnotationBase = (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => void

type NoArgsMethodAnnotationType = MethodAnnotationBase
type NoArgsMethodAnnotationFactoryType = () => MethodAnnotationBase
export type NoArgsMethodAnnotation = NoArgsMethodAnnotationFactoryType & NoArgsMethodAnnotationType

type OptionalValueMethodAnnotationFactoryType<T> = (value?: T) => MethodAnnotationBase
export type OptionalValueMethodAnnotation<T> = OptionalValueMethodAnnotationFactoryType<T> & NoArgsMethodAnnotationType

export const createValueMethodAnnotation = <T>(): OptionalValueMethodAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as OptionalValueClassAnnotation<T>
}

export const createNoArgsMethodAnnotation = (): NoArgsMethodAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol, descriptor: PropertyDescriptor) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as NoArgsMethodAnnotation
}


// Class Property annotations
// Made for usage in properties inside a class
type PropertyAnnotationBase = (target: Object, key: string | symbol) => void

type NoArgsPropertyAnnotationType = PropertyAnnotationBase
type NoArgsPropertyAnnotationFactoryType = () => PropertyAnnotationBase
export type NoArgsPropertyAnnotation = NoArgsPropertyAnnotationFactoryType & NoArgsPropertyAnnotationType

type OptionalValuePropertyAnnotationFactoryType<T> = (value?: T) => PropertyAnnotationBase
export type OptionalValuePropertyAnnotation<T> = OptionalValuePropertyAnnotationFactoryType<T> & NoArgsPropertyAnnotationType

export const createValuePropertyAnnotation = <T>(): OptionalValuePropertyAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as OptionalValueClassAnnotation<T>
}

export const createNoArgsPropertyAnnotation = (): NoArgsPropertyAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as NoArgsPropertyAnnotation
}



// Method Parameter Annotations
// Made for usage in parameters of a method
type MethodParameterAnnotationBase = (target: Object, key: string | symbol, parameterIndex: number) => void

type NoArgsMethodParameterAnnotationType = MethodParameterAnnotationBase
type NoArgsMethodParameterAnnotationFactoryType = () => MethodParameterAnnotationBase
export type NoArgsMethodParameterAnnotation = NoArgsMethodParameterAnnotationFactoryType & NoArgsMethodParameterAnnotationType

type OptionalValueMethodParameterAnnotationFactoryType<T> = (value?: T) => MethodParameterAnnotationBase
export type OptionalValueMethodParameterAnnotation<T> = OptionalValueMethodParameterAnnotationFactoryType<T> & NoArgsMethodParameterAnnotationType

export const createValueMethodParameterAnnotation = <T>(): OptionalValueMethodParameterAnnotation<T> => {
  const valueAnnotation = (value?: T) => (target: Object, key: string | symbol, parameterIndex: number) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as OptionalValueClassAnnotation<T>
}

export const createNoArgsMethodParameterAnnotation = (): NoArgsMethodParameterAnnotation => {
  const valueAnnotation = () => (target: Object, key: string | symbol, parameterIndex: number) => {
  }
  valueAnnotation.apply = valueAnnotation()
  return valueAnnotation as NoArgsMethodParameterAnnotation
}
