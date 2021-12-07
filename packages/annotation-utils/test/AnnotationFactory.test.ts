import { AnnotationFactory } from "../src"

export type TestTypeAnnotation = AnnotationFactory.TypeAnnotation<[value: string | void]>
export const TestTypeAnnotation: TestTypeAnnotation = AnnotationFactory.createTypeAnnotation<[value: string | void]>()

export type TestMethodAnnotation = AnnotationFactory.MethodAnnotation<[value: string | void]>
export const TestMethodAnnotation: TestMethodAnnotation = AnnotationFactory.createMethodAnnotation<[value: string | void]>()

export type TestFieldAnnotation = AnnotationFactory.FieldAnnotation<[value: string | void]>
export const TestFieldAnnotation: TestFieldAnnotation = AnnotationFactory.createFieldAnnotation<[value: string | void]>()

export type TestParameterAnnotation = AnnotationFactory.ParameterAnnotation<[value: string | void]>
export const TestParameterAnnotation: TestParameterAnnotation = AnnotationFactory.createParameterAnnotation<[value: string | void]>()


export type TupleTestTypeAnnotation = AnnotationFactory.TypeAnnotation<[name: string, enabled: boolean, index: number]>
export const TupleTestTypeAnnotation: TupleTestTypeAnnotation = AnnotationFactory.createTypeAnnotation<[name: string, enabled: boolean, index: number]>()

type TestObject = {
  testField: string
}

@TupleTestTypeAnnotation("name", true, 1)
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
