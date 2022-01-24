import { AnnotationFactory } from "../src"

export const TestTypeAnnotation = AnnotationFactory.createTypeAnnotation<[value: string | void]>()
export const TestMethodAnnotation = AnnotationFactory.createMethodAnnotation<[value: string | void]>()
export const TestFieldAnnotation = AnnotationFactory.createFieldAnnotation<[value: string | void]>()
export const TestParameterAnnotation = AnnotationFactory.createParameterAnnotation<[value: string | void]>()

export const TupleTestTypeAnnotation = AnnotationFactory.createTypeAnnotation<[name: string, enabled: boolean, index: number]>()

//TODO: Experiment exchanging tuples with objects to see if the IDE documentation looks better

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
