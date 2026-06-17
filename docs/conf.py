# -- 项目信息 -----------------------------------------------------
project = 'My Project'
copyright = '2026'
author = 'Author'
release = '0.1'

# -- 通用配置 -----------------------------------------------------
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
]

templates_path = ['_templates']
exclude_patterns = []

# -- HTML 输出选项 -------------------------------------------------
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
