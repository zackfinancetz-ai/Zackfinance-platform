#!/bin/bash
firebase login
firebase deploy --only hosting,firestore:rules,storage:rules
