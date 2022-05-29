import './Card.css'
export default function Card(props) {
    //this is to inherit stylesheet from children
    const classes = 'card ' + props.className;
    //children is the content that component is wrapped into
    return <div className={classes}>{props.children}</div>
}