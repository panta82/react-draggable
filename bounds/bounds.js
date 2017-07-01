var Draggable = window.ReactDraggable;

var App = React.createClass({
	getInitialState() {
		return {
			activeDrags: 0,
			position: 10,
			target: 0
		};
	},

	onStart() {
		this.setState({activeDrags: ++this.state.activeDrags});
	},

	onStop() {
		this.setState({activeDrags: --this.state.activeDrags});
	},

	onDrag(e, data) {
		this.setState({
			position: data.x,
			target: data.unboundX
		});
	},

	render() {
		const dragHandlers = {onStart: this.onStart, onStop: this.onStop, onDrag: this.onDrag};
		return (
			<div className="holder">
				<Draggable axis="x" position={{x: this.state.position, y: 0}} bounds={{left: 10, right: 300}} {...dragHandlers}>
					<div className="box">
						<p>Offest: {this.state.position}</p>
						<p>Target: {this.state.target}</p>
					</div>
				</Draggable>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('container'));
