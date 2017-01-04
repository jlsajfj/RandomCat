import logging
import os
import sys
import json
import urllib.request
# from splunk import AuthorizationFailed as AuthorizationFailed
import splunk.appserver.mrsparkle.controllers as controllers
import splunk.appserver.mrsparkle.lib.util as util
from splunk.appserver.mrsparkle.lib.util import make_splunkhome_path
from splunk.appserver.mrsparkle.lib.decorators import expose_page
_APPNAME = 'CATAPI'
def setup_logger(level):
 """
 Setup a logger for the REST handler.
 """
 logger = logging.getLogger('splunk.appserver.%s.controllers.getCat' % _APPNAME)
 logger.propagate = False  # Prevent the log messages from being duplicated in the python.log file
 logger.setLevel(level)
 file_handler = logging.handlers.RotatingFileHandler(
	 make_splunkhome_path(['var', 'log', 'splunk', 'my_script_controller.log']), maxBytes=25000000, backupCount=5)
 formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
 file_handler.setFormatter(formatter)
 logger.addHandler(file_handler)
 return logger
logger = setup_logger(logging.DEBUG)
class getCat(controllers.BaseController):
 # /custom/CATAPI/getCat/my_endpoint
 @expose_page(must_login=True, methods=['GET'])
 def my_endpoint(self, **kwargs):
	with urllib.request.urlopen("http://random.cat/meow") as url:
		s = url.read()
		return s