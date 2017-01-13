from flask import Blueprint, render_template
from models import Service

web = Blueprint('web', __name__)

@web.route('/web')
def web_index():
    return render_template('web.html')

# Routes for Message

@web.route('/web/message/send')
def web_message_send():
    services = Service.query.all()
    return render_template('message/send.html', services=services)

@web.route('/web/message/fetchunread')
def web_message_fetchunread():
    return render_template('message/fetchunread.html')

@web.route('/web/message/markread')
def web_message_markread():
    return render_template('message/markread.html')

# Routes for Service

@web.route('/web/service/create')
def web_service_create():
    return render_template('service/create.html')

@web.route('/web/service/getinfo')
def web_service_getinfo():
    services = Service.query.all()
    return render_template('service/getinfo.html', services=services)

@web.route('/web/service/update')
def web_service_update():
    services = Service.query.all()
    return render_template('service/update.html', services=services)

@web.route('/web/service/delete')
def web_service_delete():
    services = Service.query.all()
    return render_template('service/delete.html', services=services)

# Routes for Subscription

@web.route('/web/subscription/subscribe')
def web_subscription_subscribe():
    services = Service.query.all()
    return render_template('subscription/subscribe.html', services=services)

@web.route('/web/subscription/get')
def web_subscription_get():
    return render_template('subscription/get.html')

@web.route('/web/subscription/unsubscribe')
def web_subscription_unsubscribe():
    services = Service.query.all()
    return render_template('subscription/unsubscribe.html', services=services)
