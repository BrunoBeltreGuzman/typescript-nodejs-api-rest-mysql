import { Request, Response } from "express";

import { connection } from "../../database/connection";

export const apiUsers = {
       /*
              insert
       */
       insert: async function (
              request: Request,
              response: Response
       ): Promise<Response> {
              const name = request.body.name;
              const email = request.body.email;
              const password = request.body.password;

              const result = await connection.query({
                     sql:
                            "INSERT INTO users (name, email, password) VALUES (?,?,?)",
                     values: [name, email, password],
              });
              return response.send(result[0]);
       },

       /*
              update
       */
       update: async function (
              request: Request,
              response: Response
       ): Promise<Response> {
              const name = request.body.name;
              const email = request.body.email;
              const password = request.body.password;

              const id = request.params.id;

              const result = await connection.query({
                     sql:
                            "UPDATE  users set name = ?, email = ?, password = ? WHERE id = ?",
                     values: [name, email, password, id],
              });
              return response.send(result[0]);
       },

       /*
              delete
       */
       delete: async function (
              request: Request,
              response: Response
       ): Promise<Response> {
              const id = request.params.id;

              const result = await connection.query({
                     sql: "DELETE FROM users WHERE id = ?",
                     values: [id],
              });
              return response.send(result[0]);
       },

       /*
              findAll
       */
       findAll: async function (
              request: Request,
              response: Response
       ): Promise<Response> {
              const users = await connection.query("SELECT * FROM users");
              return response.send(users[0]);
       },

       /*
              findById
       */
       findById: async function (
              request: Request,
              response: Response
       ): Promise<Response> {
              const id = request.params.id;
              const users = await connection.query({
                     sql: "SELECT * FROM users where id = ?",
                     values: [id],
              });
              return response.send(users[0]);
       },
};
