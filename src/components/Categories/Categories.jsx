import React from 'react'
import Category from '../Category/Category';
import './categories.css';

export default function Categories({ title, categoryAry }) {
    categoryAry.map(item => console.log(item));
  return (
    <dl class="category">
		<dt class="a11y-hidden">{title}</dt>
		{categoryAry.map(item => (
            <dd><Category>{item}</Category></dd>
        ))}
	</dl>
  )
}