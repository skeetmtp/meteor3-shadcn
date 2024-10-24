import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { Button } from "@/components/ui/button"

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <Button>Click me</Button>
  </div>
);
