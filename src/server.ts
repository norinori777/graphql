import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
	type Query{
		hello(name: String): String
	}
`);

const root = {
  hello: (name: string) => "Hello world Mr." + name,
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);

console.log("Running graphql server at 4000 port.");
