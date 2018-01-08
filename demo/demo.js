require('./stylesheets/styles.scss')

import React from 'react'
import ReactDOM from 'react-dom'

// Components
import DragSortableList from '../src/index'

const placeholder = (
	<div className="placeholderContent"> DROP HERE ! </div>
)

const list = [
 	{content: (<span><strong className="drag-selector">test1</strong></span>), classes:['test', 'bigger']},
 	{content: (<span><strong className="drag-selector">test2</strong></span>), classes:['test']},
 	{content: (<span><strong className="drag-selector">test3</strong></span>), classes:['test']},
 	{content: (<span><strong className="drag-selector">test4</strong></span>), classes:['test', 'bigger']}
]

const listHorizontal = [
 	{content: (<div><strong className="drag-selector">test1</strong></div>), classes:['bigger']},
 	{content: (<div><strong className="drag-selector">test2</strong></div>)},
 	{content: (<div><strong className="drag-selector">test3</strong></div>), classes:['bigger']},
 	{content: (<div><strong className="drag-selector">test4</strong></div>)}
]

const listGrid = [
	{content: (<div><strong className="drag-selector">test1</strong></div>)},
 	{content: (<div><strong className="drag-selector">test2</strong></div>)},
 	{content: (<div><strong className="drag-selector">test3</strong></div>)},
	{content: (<div><strong className="drag-selector">test4</strong></div>)},
	{content: (<div><strong className="drag-selector">test5</strong></div>)},
	{content: (<div><strong className="drag-selector">test6</strong></div>)},
	{content: (<div><strong className="drag-selector">test7</strong></div>)},
	{content: (<div><strong className="drag-selector">test8</strong></div>)},
 	{content: (<div><strong className="drag-selector">test9</strong></div>)}
]

const listWithNoDrag = [
	{content: (<div className="no-drag"><strong className="drag-selector">test1</strong><div><input type='text' /><strong>Testing</strong></div></div>)},
	{content: (<div className="no-drag"><strong className="drag-selector">test2</strong><div><input type='text' /><strong>Testing</strong></div></div>)},
	{content: (<div className="no-drag"><strong className="drag-selector">test3</strong><div><input type='text' /><strong>Testing</strong></div></div>)},
	{content: (<div className="no-drag"><strong className="drag-selector">test4</strong><div><input type='text' /><strong>Testing</strong></div></div>)},
]

const listWithLinks = [
 	{content: (<a href='http://www.google.fr'>google</a>), classes:['test', 'bigger']},
 	{content: (<a href='http://www.yahoo.fr'>yahoo</a>), classes:['test']},
 	{content: (<a href='http://www.thomschell.com'>my website</a>), classes:['test']},
]

const onSort = (sortedList, dropEvent) => {
  console.log("sortedList", sortedList, dropEvent);
}

const onDrag = (dragEvent) => {
  console.log("dragging", dragEvent);
}

ReactDOM.render(<DragSortableList items={list} moveTransitionDuration={0.3} onSort={onSort} onDrag={onDrag} type="vertical"/>, document.getElementById('example1'))
ReactDOM.render(<DragSortableList items={listHorizontal} moveTransitionDuration={0.3} dropBackTransitionDuration={0.3} placeholder={placeholder} onSort={onSort} onDrag={onDrag} type="horizontal"/>, document.getElementById('example2'))
ReactDOM.render(<DragSortableList items={listGrid} dropBackTransitionDuration={0.3} onSort={onSort} onDrag={onDrag} type="grid"/>, document.getElementById('example3'))
ReactDOM.render(<DragSortableList items={listWithNoDrag} dropBackTransitionDuration={0.3} onSort={onSort} onDrag={onDrag}/>, document.getElementById('example4'))
/*
	ReactDOM.render(<DragSortableList items={listWithLinks} dropBackTransitionDuration={0.3} onSort={onSort} onDrag={onDrag} type="grid"/>, document.getElementById('example4'))
*/
