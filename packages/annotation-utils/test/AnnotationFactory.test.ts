import { AnnotationFactory } from "../src"

export type TestTypeAnnotation = AnnotationFactory.TypeAnnotation<string | void>
export const TestTypeAnnotation: TestTypeAnnotation = AnnotationFactory.createTypeAnnotation<string | void>()

export type TestMethodAnnotation = AnnotationFactory.MethodAnnotation<string | void>
export const TestMethodAnnotation: TestMethodAnnotation = AnnotationFactory.createMethodAnnotation<string | void>()

export type TestFieldAnnotation = AnnotationFactory.FieldAnnotation<string | void>
export const TestFieldAnnotation: TestFieldAnnotation = AnnotationFactory.createFieldAnnotation<string | void>()

export type TestParameterAnnotation = AnnotationFactory.ParameterAnnotation<string | void>
export const TestParameterAnnotation: TestParameterAnnotation = AnnotationFactory.createParameterAnnotation<string | void>()

type TestObject = {
  testField: string
}

@TestTypeAnnotation()
@TestTypeAnnotation("value")
class ValidTestClass {

  @TestFieldAnnotation()
  @TestFieldAnnotation("value")
  public readonly testField: string

  constructor(testField: string) {
    this.testField = testField;
  }

  @TestMethodAnnotation()
  @TestMethodAnnotation("value")
  public testMethod(): TestObject {
    return {
      testField: this.testField
    }
  }

  public testParameter(
    @TestParameterAnnotation()
    @TestParameterAnnotation("value")
      testParameter: string
  ): string {
    return testParameter
  }
}

describe("AnnotationFactory", () => {
  it("should compile and create the class instance", () => {
    const testValue = new ValidTestClass("test")

    expect(testValue.testMethod().testField).toEqual("test")
    expect(testValue.testParameter("test1")).toEqual("test1")
  })
})
