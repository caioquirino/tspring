import * as ts from "typescript"
// import { transform as testTransform } from "ts-transformer-testing-library"

describe('Index',  () => {
  it('should work', () => {

    let decorators = []

    const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
      return sourceFile => {
        const visitor = (node: ts.Node): ts.Node => {
          // console.log("NODE", node.getFullText(), ts.SyntaxKind[node.kind])

          if(ts.isStringLiteral(node)) {
            return ts.createStringLiteral("Aeae")
          }

          if(ts.isDecorator(node)) {
            decorators.push(node)
          }

          return ts.visitEachChild(node, visitor, context);
        };

        return ts.visitNode(sourceFile, visitor);
      };
    };

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
      public repo(@PathVariable string id): @ResponseBody MyClass {
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
      console.log(`Decorator ${d.getFullText()} for ${ts.SyntaxKind[d.parent.kind]} ${d.parent.getText()}`)
    })

    // console.log(`Decorators`, decorators);
  })
})
