"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string().min(6).max(50)
});
export default function Auth() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      {/*center this directly in the middle of the screen*/}
        <div className="flex items-center justify-center min-h-screen pb:1">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Login">Login</TabsTrigger>
              <TabsTrigger value="Sign-Up">Sign-Up</TabsTrigger>
            </TabsList>
            <TabsContent value="Login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Login to your account here. Click the login button when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" defaultValue="" placeholder="Type email here" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input id="username" placeholder="Type password here" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Login</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="Sign-Up">
              <Card>
                <CardHeader>
                  <CardTitle>Sign-Up</CardTitle>
                  <CardDescription>
                    Sign up for an account here. After submitting, you will be able to login.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Hayden Thai" {...field} />
                            </FormControl>
                            <FormDescription>
                              Your public display name.
                            </FormDescription>
                            <FormMessage />
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="thaihayden@gmail.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is the email associated with your account. Don't worry, we won't spam you (;
                            </FormDescription>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>

                            <FormLabel>Password Confirmation</FormLabel>
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>

                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
    </>
  );
}