import React, { Component } from 'react'
import Link from 'next/link';
import "./Navbar.scss";

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <nav>
                    <Link href='/'>
                        <a title="Our API">
                            Home
                    </a>
                    </Link>
                    <Link href="/about">
                        <a title="About NextJS">About NexxtJS</a>
                    </Link>
                    <mark className="badge">Hello!</mark>
                   
                </nav>
            </div>
        )
    }
}
export default Navbar