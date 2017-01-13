This is a webinterface for the Pushjet server component. This webinterface is made to plug straight into the existing pushjet server code.

To make it work, add the files to the root directory of the pushjet server. After that you need to add the following:

In "controllers/__init__.py" add ***from .web import web*** right below the line ***from .gcm import gcm***.

In application.py add ***app.register_blueprint(web)*** right below the line ***app.register_blueprint(service)*** 
