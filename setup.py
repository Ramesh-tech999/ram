from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in ram/__init__.py
from ram import __version__ as version

setup(
	name="ram",
	version=version,
	description="demo",
	author="ramesh",
	author_email="rames@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
