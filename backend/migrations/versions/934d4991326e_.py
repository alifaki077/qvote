"""empty message

Revision ID: 934d4991326e
Revises: 
Create Date: 2017-05-25 19:30:11.090539

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '934d4991326e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('choices', sa.Column('ratio', sa.Float(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('choices', 'ratio')
    # ### end Alembic commands ###
