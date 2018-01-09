require('./stylesheets/styles.scss')

import React from 'react'
import ReactDOM from 'react-dom'

// Components
import DragSortableList from '../src/index'

const placeholder = (
	<div className="placeholderContent"> DROP HERE ! </div>
)

const list = [
 	{content: (<span>test1</span>), classes:['test', 'bigger']},
 	{content: (<span>test2</span>), classes:['test']},
 	{content: (<span>test3</span>), classes:['test']},
 	{content: (<span>test4</span>), classes:['test', 'bigger']}
]

const listHorizontal = [
 	{content: (<div>test1</div>), classes:['bigger']},
 	{content: (<div>test2</div>)},
 	{content: (<div>test3</div>), classes:['bigger']},
 	{content: (<div>test4</div>)}
]

const listGrid = [
	{content: (<div>test1</div>)},
 	{content: (<div>test2</div>)},
 	{content: (<div>test3</div>)},
	{content: (<div>test4</div>)},
	{content: (<div>test5</div>)},
	{content: (<div>test6</div>)},
	{content: (<div>test7</div>)},
	{content: (<div>test8</div>)},
 	{content: (<div>test9</div>)}
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

const onDragStart = (dragEvent) => {
  console.log("dragging", dragEvent);
}

ReactDOM.render(<DragSortableList items={list} moveTransitionDuration={0.3} onSort={onSort} onDragStart={onDragStart} type="vertical"/>, document.getElementById('example1'))
ReactDOM.render(<DragSortableList items={listHorizontal} moveTransitionDuration={0.3} dropBackTransitionDuration={0.3} placeholder={placeholder} onSort={onSort} onDragStart={onDragStart} type="horizontal"/>, document.getElementById('example2'))
ReactDOM.render(<DragSortableList items={listGrid} dropBackTransitionDuration={0.3} onSort={onSort} onDragStart={onDragStart} type="grid"/>, document.getElementById('example3'))
ReactDOM.render(<DragSortableList items={listWithNoDrag} dropBackTransitionDuration={0.3} onSort={onSort} onDragStart={onDragStart}/>, document.getElementById('example4'))
/*
	ReactDOM.render(<DragSortableList items={listWithLinks} dropBackTransitionDuration={0.3} onSort={onSort} onDragStart={onDragStart} type="grid"/>, document.getElementById('example4'))
*/
