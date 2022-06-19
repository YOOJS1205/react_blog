import React from 'react'
import Hidden from '../Hidden/Hidden';
import './authorWrap.css';

export default function AuthorWrap() {
    return (
        <dl class="author-wrap">
	    	<Hidden><dt>Author</dt></Hidden>
	    	<dd class="author"><img src="/assets/images/profile.jpg" alt="" /> Chilli</dd>
	    	<dt class="a11y-hidden">Created</dt>
	    	<dd class="created">2022.05.25</dd>
	    </dl>
    )
}
