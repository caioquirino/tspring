import * as ts from "typescript"

describe('Index',  () => {
  it('should work', () => {

    let decorators = []

    const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
      return sourceFile => {
        const visitor = (node: ts.Node): ts.Node => {
          if(ts.isDecorator(node)) {
            decorators.push(node)
          }

          return ts.visitEachChild(node, visitor, context)
        }

        return ts.visitNode(sourceFile, visitor)
      }
    }

    const result = ts.transpileModule(`
    @Controller
    export class MyClass {
      
    }
    @Configuration
    export class MyConfig {
      @Bean
      @Qualified("MySuperNiceClass")
      public repo(): MyClass {
        return new MyClass()
      }
    }
    @Controller
    @Autowired
    @RequestMapping("/v1/my")
    export class MyController {
    
      @Qualified("MySuperNiceClass")
      private readonly myClass: MyClass
      
      public constructor(myClass: MyClass) {
        this.myClass = myClass
      }
      
      @GetMapping("/greeting/{id}")
      public getGreetingById(@PathVariable string id): MyClass {
        return new MyClass()
      }
    }
    
    `, {
      transformers: {
        before: [transformer]
      }
    })

    //
    // const result = testTransform(`console.log('Hello, World!');`, {
    //   transforms: [(program: ts.Program) => transformer],
    // });

    // console.log(`RESULT: ${result.outputText}`);

    decorators.forEach(d => {
      console.log(`Decorator ${d.getFullText()} for ${ts.SyntaxKind[d.parent.kind]}`)
    })

    // console.log(`Decorators`, decorators);
  })
})
