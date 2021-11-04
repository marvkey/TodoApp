import flask 
app = flask.Flask("__main__")

app.route("/")
def RunApp():
    return flask.render_template("Todo app",token ="main.py")

app.run(debug=True)