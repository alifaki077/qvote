# -*- coding: utf-8 -*-
import click
import pytest

TEST_PATH = "../../tests" # TODO: change this

@click.command()
def test():
    """Run the tests."""
    rv = pytest.main([TEST_PATH, '--verbose'])
    exit(rv)
