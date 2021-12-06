import { AnnotationFactory } from "../src"

export type TestClassAnnotation = AnnotationFactory.OptionalValueClassAnnotation<string>
export const TestClassAnnotation: TestClassAnnotation = AnnotationFactory.createValueClassAnnotation<string>()
export type TestNoArgsClassAnnotation = AnnotationFactory.NoArgsClassAnnotation
export const TestNoArgsClassAnnotation: TestNoArgsClassAnnotation = AnnotationFactory.createNoArgsClassAnnotation()

export type TestMethodAnnotation = AnnotationFactory.OptionalValueMethodAnnotation<string>
export const TestMethodAnnotation: TestMethodAnnotation = AnnotationFactory.createValueMethodAnnotation<string>()
export type TestNoArgsMethodAnnotation = AnnotationFactory.NoArgsMethodAnnotation
export const TestNoArgsMethodAnnotation: TestNoArgsMethodAnnotation = AnnotationFactory.createNoArgsMethodAnnotation()

export type TestPropertyAnnotation = AnnotationFactory.OptionalValuePropertyAnnotation<string>
export const TestPropertyAnnotation: TestPropertyAnnotation = AnnotationFactory.createValuePropertyAnnotation<string>()
export type TestNoArgsPropertyAnnotation = AnnotationFactory.NoArgsPropertyAnnotation
export const TestNoArgsPropertyAnnotation: TestNoArgsPropertyAnnotation = AnnotationFactory.createNoArgsPropertyAnnotation()

export type TestMethodParameterAnnotation = AnnotationFactory.OptionalValueMethodParameterAnnotation<string>
export const TestMethodParameterAnnotation: TestMethodParameterAnnotation = AnnotationFactory.createValueMethodParameterAnnotation<string>()
export type TestNoArgsMethodParameterAnnotation = AnnotationFactory.NoArgsMethodParameterAnnotation
export const TestNoArgsMethodParameterAnnotation: TestNoArgsMethodParameterAnnotation = AnnotationFactory.createNoArgsMethodParameterAnnotation()

type TestObject = {
  testProperty: string
}

@TestClassAnnotation
@TestClassAnnotation()
@TestClassAnnotation("value")
@TestNoArgsClassAnnotation
@TestNoArgsClassAnnotation()
// @ts-expect-error
@TestNoArgsClassAnnotation("test") // Should be invalid to the compiler
class TestClass {

  @TestPropertyAnnotation
  @TestPropertyAnnotation()
  @TestPropertyAnnotation("value")
  @TestNoArgsPropertyAnnotation
  @TestNoArgsPropertyAnnotation()
  // @ts-expect-error
  @TestNoArgsPropertyAnnotation("test") // Should be invalid to the compiler
  private readonly testProperty: string

  @TestMethodAnnotation
  @TestMethodAnnotation()
  @TestMethodAnnotation("value")
  @TestNoArgsMethodAnnotation
  @TestNoArgsMethodAnnotation()
  // @ts-expect-error
  @TestNoArgsMethodAnnotation("test") // Should be invalid to the compiler
  public testMethod(): TestObject {
    return {
      testProperty: "test"
    }
  }

  public testMethodParameter(
    @TestMethodParameterAnnotation
    @TestMethodParameterAnnotation()
    @TestMethodParameterAnnotation("value")
    @TestNoArgsMethodParameterAnnotation
    @TestNoArgsMethodParameterAnnotation()
    // @ts-expect-error
    @TestNoArgsMethodParameterAnnotation("test") // Should be invalid to the compiler
    testParameter: string
  ): void {

  }
}
