.PHONY: seeds

seeds:
	psql -d button_starter -f ./seeds.sql